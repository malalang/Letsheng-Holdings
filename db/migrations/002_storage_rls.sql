'''-- Create a policy to allow public read access to the 'letsheng-holdings' bucket.
CREATE POLICY "Allow public read access on letsheng-holdings"
ON storage.objects FOR SELECT
USING (bucket_id = 'letsheng-holdings');

-- Create a policy to allow anonymous users to insert (upload) files.
CREATE POLICY "Allow anonymous uploads on letsheng-holdings"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'letsheng-holdings' AND
  role() = 'anon'
);

-- Create a policy to allow authenticated users with the 'admin' role to manage files.
-- This single policy grants insert, update, and delete permissions to admins.
CREATE POLICY "Allow admin management on letsheng-holdings"
ON storage.objects FOR ALL
USING (
  bucket_id = 'letsheng-holdings' AND
  (select auth.jwt() ->> 'role') = 'admin'
)
WITH CHECK (
  bucket_id = 'letsheng-holdings' AND
  (select auth.jwt() ->> 'role') = 'admin'
);
'''