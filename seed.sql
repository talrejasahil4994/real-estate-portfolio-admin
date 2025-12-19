-- Seed Projects
INSERT INTO "Projects" ("id", "name", "description", "imageUrl", "createdAt", "updatedAt") VALUES
(uuid_generate_v4(), 'Serene Heights', 'Luxury apartments with breathtaking city views and premium amenities including a rooftop infinity pool.', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Oakwood Villas', 'Spacious 4BHK villas nestled in nature, featuring private gardens and smart home automation.', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'The Grand Plaza', 'Modern commercial space designed for high-end retail and corporate offices in the heart of the business district.', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Azure Waterfront', 'Premium waterfront residency offering private beach access and Mediterranean style architecture.', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Seed Clients (Testimonials)
INSERT INTO "Clients" ("id", "name", "designation", "description", "imageUrl", "createdAt", "updatedAt") VALUES
(uuid_generate_v4(), 'John Smith', 'CEO, TechCorp', 'The attention to detail in their Serene Heights project is unmatched. Highly professional team and smooth execution.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Sarah Johnson', 'Home Owner', 'We found our dream home at Oakwood Villas. The design process was collaborative and the final result exceeded our expectations.', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Michael Chen', 'Investment Consultant', 'RealEstateAdmin has been my go-to for luxury portfolio management. Their transparency and market insights are top-tier.', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Seed some initial Newsletter Subscribers (Optional)
INSERT INTO "Subscribers" ("id", "email", "createdAt", "updatedAt") VALUES
(uuid_generate_v4(), 'info@sample.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'newsletter@test.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Seed Contact Inquiries
INSERT INTO "Contacts" ("id", "fullName", "email", "mobile", "city", "createdAt", "updatedAt") VALUES
(uuid_generate_v4(), 'Alice Walker', 'alice.w@example.com', '555-0101', 'Jersey City', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Robert Downey', 'robert.d@example.com', '555-0202', 'Los Angeles', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(uuid_generate_v4(), 'Emma Watson', 'emma.w@example.com', '555-0303', 'London', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
