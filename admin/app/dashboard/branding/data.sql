-- Insert mock data for branding products
INSERT INTO
  "public"."branding" (
    "id",
    "title",
    "category",
    "description",
    "image",
    "specs",
    "is_featured",
    "gallery",
    "reviews"
  )
VALUES
  (
    't-shirt',
    'Executive Crewneck T-Shirt',
    'Corporate Apparel',
    'The cornerstone of a professional wardrobe. Woven from ultra-soft, 180gsm combed cotton for superior comfort and a premium feel. Features a classic fit with a reinforced collar and shoulder-to-shoulder taping for lasting durability. Ideal for team uniforms and corporate events.',
    '/T-shirt.png',
    '[{"label": "Material", "value": "100% Combed Cotton"}, {"label": "Weight", "value": "180gsm"}, {"label": "Fit", "value": "Unisex Classic"}]',
    TRUE,
    '[{"title": "Front View", "description": "Clean and professional look", "imageUrl": "/T-shirt.png"}, {"title": "Material Detail", "description": "Close-up of the premium fabric", "imageUrl": "https://images.unsplash.com/photo-1581655353564-df123a1642b1?q=80&w=2574&auto=format&fit=crop"}, {"title": "Team Set", "description": "Uniforms for a cohesive brand image", "imageUrl": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop"}]',
    '[{"id": "review-tshirt-1", "author": "Marketing Manager, ABC Corp", "rating": 5, "comment": "Excellent quality and our logo looks fantastic. The team loves them."}, {"id": "review-tshirt-2", "author": "Event Coordinator", "rating": 4, "comment": "Great shirts for our annual conference. Very comfortable."}]'
  ),
  (
    'mug',
    'Ceramic Branding Mug',
    'Promotional Merchandise',
    'A powerful statement piece for any desk. This 11oz ceramic mug is finished with a high-gloss, scratch-resistant coating, ensuring your branding remains vibrant and pristine. Dishwasher and microwave safe. Perfect for client gifts and internal brand reinforcement.',
    '/Mug.png',
    '[{"label": "Capacity", "value": "11oz (325ml)"}, {"label": "Material", "value": "AAA Grade Ceramic"}, {"label": "Printing", "value": "Full-Color Dye-Sublimation"}]',
    TRUE,
    '[{"title": "Mug in Hand", "description": "Perfect size and comfortable grip", "imageUrl": "/Mug.png"}, {"title": "Glossy Finish", "description": "Detail of the scratch-resistant coating", "imageUrl": "https://images.unsplash.com/photo-1617290139191-285679a3194a?q=80&w=2574&auto=format&fit=crop"}, {"title": "Office Ready", "description": "A great addition to any workspace", "imageUrl": "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2670&auto=format&fit=crop"}]',
    '[{"id": "review-mug-1", "author": "Office Manager", "rating": 5, "comment": "The print quality is outstanding. Our new favorite office mugs."}, {"id": "review-mug-2", "author": "Client Relations", "rating": 5, "comment": "We sent these as client gifts and got great feedback. Very professional."}]'
  ),
  (
    'posters',
    'High-Resolution Posters',
    'Promotional Merchandise',
    'Make a statement with vibrant, high-resolution posters. Perfect for events, promotions, and interior branding. Available in a variety of sizes and finishes.',
    'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2574&auto=format&fit=crop',
    '[{"label": "Paper", "value": "200gsm Satin Finish"}, {"label": "Sizes", "value": "A3, A2, A1"}, {"label": "Printing", "value": "Full-Color"}]',
    FALSE,
    '[]',
    '[]'
  ),
  (
    'banners',
    'Large-Format Banners',
    'Promotional Merchandise',
    'Command attention with durable, large-format banners. Ideal for outdoor advertising, trade shows, and events. Weather-resistant and built to last.',
    'https://images.unsplash.com/photo-1542182312-799434b79339?q=80&w=2670&auto=format&fit=crop',
    '[{"label": "Material", "value": "Heavy-Duty PVC"}, {"label": "Sizes", "value": "Custom"}, {"label": "Features", "value": "Weather-Resistant, Eyelets"}]',
    FALSE,
    '[]',
    '[]'
  );
