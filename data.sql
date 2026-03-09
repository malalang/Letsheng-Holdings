INSERT INTO tenants (id, name, property_id, status, lease_end_date, avatar_url) VALUES
('tenant-001', 'John Doe', 'prop-001', 'Active', '2024-12-31', '/avatars/01.png'),
('tenant-002', 'Jane Smith', 'prop-002', 'Active', '2025-06-30', '/avatars/02.png'),
('tenant-003', 'Michael Johnson', 'prop-003', 'Inactive', '2023-11-30', '/avatars/03.png'),
('tenant-004', 'Emily Davis', 'prop-004', 'Pending', '2024-08-31', '/avatars/04.png'),
('tenant-005', 'Chris Brown', 'prop-005', 'Active', '2025-02-28', '/avatars/05.png');

INSERT INTO payments (id, tenant_id, amount, date, status) VALUES
('payment-001', 'tenant-001', 1200, '2024-03-01', 'Paid'),
('payment-002', 'tenant-001', 1200, '2024-02-01', 'Paid'),
('payment-003', 'tenant-001', 1200, '2024-01-01', 'Late'),
('payment-004', 'tenant-002', 1500, '2024-03-05', 'Paid'),
('payment-005', 'tenant-003', 950, '2024-03-10', 'Pending');