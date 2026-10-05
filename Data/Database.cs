using System.Data.OleDb;
using MShalomWebsite.Models;

namespace MShalomWebsite.Data
{
    public class Database
    {
        private readonly string connectionString;

        public Database()
        {
            string databasePath = Path.Combine(
                AppContext.BaseDirectory,
                "Database",
                "MShalomDatabase.accdb"
            );

            connectionString =
                $"Provider=Microsoft.ACE.OLEDB.12.0;Data Source={databasePath};Persist Security Info=False;";
        }

        public void SaveEnquiry(Enquiry enquiry)
        {
            using (OleDbConnection connection = new OleDbConnection(connectionString))
            {
                connection.Open();

                string sql = @"
                    INSERT INTO Enquiries
                    ([Name], [Email], [Phone], [Message], [DateSubmitted])
                    VALUES (?, ?, ?, ?, ?)";

                using (OleDbCommand command = new OleDbCommand(sql, connection))
                {
                    command.Parameters.AddWithValue("@Name", enquiry.Name);
                    command.Parameters.AddWithValue("@Email", enquiry.Email);
                    command.Parameters.AddWithValue("@Phone", enquiry.Phone);
                    command.Parameters.AddWithValue("@Message", enquiry.Message);
                    command.Parameters.AddWithValue("@DateSubmitted", enquiry.DateSubmitted);

                    command.ExecuteNonQuery();
                }
            }
        }
    }
}