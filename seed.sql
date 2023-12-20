-- Delete existing data from Customers table
DELETE FROM Customers;

-- Insert new data into Customers table if not exists
INSERT INTO Customers (customer_name)
VALUES
    ('John Doe'),
    ('Jane Smith'),
    ('Bob Johnson')
    ON CONFLICT DO NOTHING;

-- Delete existing data from Items table
DELETE FROM Items;

-- Insert new data into Items table if not exists
INSERT INTO Items (item_image_path, item_price, item_desc, item_url)
VALUES
    ('/images/RAM_CORSAIR_RGB_DDR4.jpg', 100, '["{Company: Corsair"," Model: Vengeance"," RGB: True"," Memory: 2x16GB"," Pin: 288"," DDR: DDR4"," ModelNo: CMW32GX4M2D3000C16}"]', 'https://www.newegg.com/corsair-32gb-288-pin-ddr4-sdram/p/N82E16820236698'),
    ('/images/SSD_SAMSUNG_1TB.jpg', 150, '["{Brand: Samsung"," Model: 970 EVO"," Capacity: 1TB"," Interface: NVMe"," FormFactor: M.2}"]', 'https://www.newegg.com/samsung-970-evo-1tb/p/N82E16820147690'),
    ('/images/GPU_NVIDIA_GEFORCE_RTX_3080.jpg', 800, '["{Brand: NVIDIA"," Model: GeForce RTX 3080"," Memory: 10GB GDDR6X"," Interface: PCIe 4.0"," Ports: 3x DisplayPort, 1x HDMI}"]', 'https://www.newegg.com/geforce-rtx-3080/p/N82E16814487522'),
    ('/images/MOTHERBOARD_ASUS_ROG_STRIX_X570.jpg', 289.99, '["{Brand: ASUS"," Model: ROG Strix X570"," Chipset: X570"," Socket: AM4"," FormFactor: ATX}"]', 'https://www.newegg.com/asus-rog-strix-x570/p/N82E16813119109'),
    ('/images/MONITOR_LG_27GL83A-B.jpg', 379.99, '["{Brand: LG"," Model: 27GL83A-B"," Size: 27 inches"," Resolution: 2560x1440"," RefreshRate: 144Hz"," PanelType: Nano IPS}"]', 'https://www.newegg.com/lg-27gl83a-b-27/p/N82E16824025942')
    ON CONFLICT DO NOTHING;
