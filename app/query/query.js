{ 
'getAllData' : 'SELECT TOP(5) * FROM [dbo].[user_info]',
'addNewUser' : 'INSERT INTO [dbo].[user_info] (name,email,password) VALUES (@user,@email,@password)',
'deleteUser' : 'DELETE FROM [dbo].[user_info] WHERE name = @userName',
'updateUserDetails' : 'UPDATE [dbo].[user_info] SET password = @newPassword WHERE name = @userName'
};