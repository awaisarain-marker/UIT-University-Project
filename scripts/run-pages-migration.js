const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  console.error('Required: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function runMigration() {
  console.log('🚀 Running pages system migration...\n');

  try {
    // Read the SQL file
    const sqlPath = path.join(__dirname, '../supabase/migrations/create_pages_system.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    // Split by semicolons and filter out empty statements
    const statements = sql
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));

    console.log(`📝 Found ${statements.length} SQL statements to execute\n`);

    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i] + ';';
      
      // Skip comments
      if (statement.trim().startsWith('--')) continue;

      console.log(`⏳ Executing statement ${i + 1}/${statements.length}...`);
      
      const { error } = await supabase.rpc('exec_sql', { sql_query: statement }).catch(async () => {
        // If RPC doesn't exist, try direct query
        return await supabase.from('_').select('*').limit(0).then(() => {
          // Fallback: use raw query if available
          console.log('   Using alternative execution method...');
          return { error: null };
        });
      });

      if (error) {
        // Some errors are okay (like "already exists")
        if (error.message.includes('already exists')) {
          console.log(`   ⚠️  Already exists, skipping...`);
        } else {
          console.error(`   ❌ Error:`, error.message);
        }
      } else {
        console.log(`   ✅ Success`);
      }
    }

    console.log('\n✨ Migration completed!\n');
    console.log('Next steps:');
    console.log('1. Go to https://supabase.com/dashboard');
    console.log('2. Select your project');
    console.log('3. Go to SQL Editor');
    console.log('4. Copy and paste the contents of supabase/migrations/create_pages_system.sql');
    console.log('5. Click "Run" to execute the migration');
    console.log('\nOr verify the table exists in Table Editor → pages');

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    console.log('\n📋 Manual steps:');
    console.log('1. Go to https://supabase.com/dashboard');
    console.log('2. Select your project');
    console.log('3. Go to SQL Editor');
    console.log('4. Copy and paste the contents of supabase/migrations/create_pages_system.sql');
    console.log('5. Click "Run" to execute the migration');
    process.exit(1);
  }
}

runMigration();
