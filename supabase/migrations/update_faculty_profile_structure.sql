-- Update faculty profile structure to support multiple headings/descriptions
-- The component now handles flexible content blocks automatically
-- This migration just updates the comments to reflect the new capability

-- Add comment explaining the new flexible structure
COMMENT ON COLUMN instructors.overview_data IS 'Tab content with flexible blocks. Supports old format {heading, description, items[]} and new format with multiple headings/descriptions. Component handles conversion automatically.';
COMMENT ON COLUMN instructors.membership_data IS 'Tab content with flexible blocks. Supports old format {heading, description, items[]} and new format with multiple headings/descriptions. Component handles conversion automatically.';
COMMENT ON COLUMN instructors.research_data IS 'Tab content with flexible blocks. Supports old format {heading, description, items[]} and new format with multiple headings/descriptions. Component handles conversion automatically.';
COMMENT ON COLUMN instructors.courses_taught_data IS 'Tab content with flexible blocks. Supports old format {heading, description, items[]} and new format with multiple headings/descriptions. Component handles conversion automatically.';
COMMENT ON COLUMN instructors.publications_data IS 'Tab content with flexible blocks. Supports old format {heading, description, items[]} and new format with multiple headings/descriptions. Component handles conversion automatically.';

-- No data migration needed - the FacultyTabManager component handles both old and new formats
