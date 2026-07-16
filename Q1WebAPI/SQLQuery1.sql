CREATE TABLE BOOKS (
    bookid int IDENTITY(1,1) PRIMARY KEY,
    name nvarchar(100),
    description nvarchar(512),
    price decimal(18, 2),
    note nvarchar(128)
);

INSERT INTO BOOKS (name, description, price, note) VALUES 
(N'Toán cao cấp', N'Các kiến thức toán học phục vụ cho chương trình đào tạo đại học', 10000.00, N'Update'),
(N'Kỹ thuật lập trình', N'Cung cấp các kiến thức lập trình cơ bản cho người mới bắt đầu học tin học', 20000.00, N'New');