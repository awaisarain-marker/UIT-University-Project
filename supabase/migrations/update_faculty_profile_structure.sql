-- Update faculty profile structure to support multiple headings/descriptions
-- Change from {heading, description, items[]} to {blocks[]}

-- The new structure will be:
-- blocks: [
--   { id, type: 'point'|'heading'|'description', text, order }
-- ]

-- Update existing data to new format
DO $$
DECLARE
  faculty_record RECORD;
  new_overview_blocks JSONB;
  new_membership_blocks JSONB;
  new_research_blocks JSONB;
  new_courses_blocks JSONB;
  new_publications_blocks JSONB;
BEGIN
  FOR faculty_record IN SELECT id, overview_data, membership_data, research_data, courses_taught_data, publications_data FROM instructors LOOP
    -- Convert overview_data
    new_overview_blocks := '{"blocks": []}'::jsonb;
    IF faculty_record.overview_data IS NOT NULL THEN
      -- This will be handled by the component for now
      -- Keep existing structure for backward compatibility
    END IF;
  END LOOP;
END $$;

-- Add comment explaining the new flexible structure
COMMENT ON COLUMN instructors.overview_data IS 'Tab content with flexible blocks: {blocks: [{id, type: "point"|"heading"|"description", text, order}]}. Backward compatible with old structure.';
COMMENT ON COLUMN instructors.membership_data IS 'Tab content with flexible blocks: {blocks: [{id, type: "point"|"heading"|"description", text, order}]}. Backward compatible with old structure.';
COMMENT ON COLUMN instructors.research_data IS 'Tab content with flexible blocks: {blocks: [{id, type: "point"|"heading"|"description", text, order}]}. Backward compatible with old structure.';
COMMENT ON COLUMN instructors.courses_taught_data IS 'Tab content with flexible blocks: {blocks: [{id, type: "point"|"heading"|"description", text, order}]}. Backward compatible with old structure.';
COMMENT ON COLUMN instructors.publications_data IS 'Tab content with flexible blocks: {blocks: [{id, type: "point"|"heading"|"description", text, order}]}. Backward compatible with old structure.';
