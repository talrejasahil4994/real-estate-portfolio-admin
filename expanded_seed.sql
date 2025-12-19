-- Expanded Seed Data for Real Estate Portfolio

-- 1. Projects (15 New Realistic Projects)
INSERT INTO "Projects" ("id", "name", "description", "imageUrl", "createdAt", "updatedAt") VALUES
(uuid_generate_v4(), 'Emerald Gardens', 'A lush residential complex featuring 3-acre private park and organic gardening spaces for residents.', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Skyline Terrace', 'Ultra-modern penthouses with 360-degree city views and private lap pools on every balcony.', 'https://images.unsplash.com/photo-1567496898905-af413988d4d3?auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Marble Arch Residency', 'Classic Victorian style meeting modern luxury. Located in the historic district with smart home integration.', 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'The Silicon Hub', 'Next-gen eco-friendly office spaces designed for tech startups with modular meeting rooms.', 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Golden Sands Resort', 'Luxury beachfront villas offering a tropical lifestyle with private docks for boat owners.', 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Cedar Ridge Estates', 'Tucked away in the pine forests, these rustic yet modern cabins offer the ultimate mountain escape.', 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'The Loft District', 'Industrial style lofts with high ceilings, exposed brick, and a vibrant community art studio.', 'https://images.unsplash.com/photo-1536376074432-a22837459ec0?auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Starlight Manor', 'A sprawling estate featuring a world-class wine cellar, home theater, and olympic-size pool.', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'EcoPixel Apartments', 'Zero-emission living with solar panels, greywater recycling, and shared community electric vehicles.', 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Vintage Square', 'Boutique retail and residential mix inspired by French courtyard architecture.', 'https://images.unsplash.com/photo-1531834186639-2d9d4c538435?auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'The Nexus Tower', 'A futuristic 50-story skyscraper featuring vertical forests and sky-high jogging tracks.', 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Riverdale Commons', 'Family-friendly gated community with 24/7 security and a private primary school on site.', 'https://images.unsplash.com/photo-1628744276229-497443d85a94?auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Zenith Business Park', 'High-tech logistics and warehouse facility located near major transport corridors.', 'https://images.unsplash.com/photo-1586528116311-ad8619bcaf14?auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Ivory Palm Villas', 'Minimalist white architecture meeting lush greenery in a quiet suburban retreat.', 'https://images.unsplash.com/photo-1512918766775-d249d662c050?auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Cobalt Creek Lofts', 'Urban living for artists and creators, featuring open floor plans and professional-grade lighting.', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 2. Clients (10 New Realistic Clients)
INSERT INTO "Clients" ("id", "name", "designation", "description", "imageUrl", "createdAt", "updatedAt") VALUES
(uuid_generate_v4(), 'David Warner', 'Architect', 'Working with this team on the Skyline Terrace was a dream. Their commitment to structural integrity is impressive.', 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Linda Carter', 'Retail Business Owner', 'The Vintage Square project transformed my business visibility. The aesthetic is exactly what our brand needed.', 'https://images.unsplash.com/photo-1544005313-94ff9169853d?auto=format&fit=crop&w=200&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'James Anderson', 'First-time Homeowner', 'Smooth paperwork, transparent pricing, and a beautiful result at Riverdale Commons. Highly recommended!', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Sophie Turner', 'Marketing Executive', 'The modern design of Zenith really helps in attracting top talent to our company.', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Steven Rogers', 'Real Estate Investor', 'Highest ROI I have seen in the city. Their projects always appreciate fast due to prime locations.', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Emily Blunt', 'Interior Designer', 'I love the natural lighting in their villas. It makes my job so much easier when the base architecture is this good.', 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=200&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Bruce Wayne', 'Venture Capitalist', 'Professionalism at every step. They deliver what they promise on time and with superior quality.', 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Natasha Romanova', 'Landscape Artist', 'The integration of green spaces in Emerald Gardens is revolutionary. A true paradise in the city.', 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=200&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Peter Parker', 'Freelancer', 'The workspace lofts are perfect for my creative process. The high ceilings provide so much mental space.', 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=200&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Diana Prince', 'Curator', 'Museum-level quality in craftsmanship. Their attention to material selection is evident everywhere.', 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 3. Subscribers (15 New Unique Emails)
INSERT INTO "Subscribers" ("id", "email", "createdAt", "updatedAt") VALUES
(uuid_generate_v4(), 'contact@techinnovations.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'hello@designworld.io', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'investor.pro@finance.net', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'news@modernliving.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'updates@realestate.org', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'mark.z@meta.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'bill.g@gatesfoundation.org', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'elon.m@spacex.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'jeff.b@amazon.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'tim.c@apple.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'admin@globalventures.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'support@homedecor.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'info@luxurydeals.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'marketing@urbanpulse.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'ceo@visionarybuilders.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 4. Contact Inquiries (10 New Realistic Contacts)
INSERT INTO "Contacts" ("id", "fullName", "email", "mobile", "city", "createdAt", "updatedAt") VALUES
(uuid_generate_v4(), 'Kevin Hart', 'kevin.h@comedy.com', '555-0987', 'Philadelphia', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Scarlett Johansson', 'scarlett.j@marvel.com', '555-1234', 'New York City', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Chris Pratt', 'chris.p@galaxy.com', '555-5678', 'Los Angeles', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Zendaya Coleman', 'zendaya@euphoria.com', '555-3344', 'Oakland', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Tom Holland', 'tom.h@spidey.net', '555-2211', 'London', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Gal Gadot', 'gal.g@wonder.il', '555-8899', 'Tel Aviv', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Ryan Reynolds', 'ryan.r@pool.ca', '555-7766', 'Vancouver', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Millie Bobby Brown', 'millie@st.com', '555-4455', 'Atlanta', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Will Smith', 'will.s@fresh.com', '555-0011', 'Miami', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Margot Robbie', 'margot.r@barbie.au', '555-6677', 'Dalby', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
