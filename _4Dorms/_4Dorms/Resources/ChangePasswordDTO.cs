﻿namespace _4Dorms.Resources
{
    public class ChangePasswordDTO
    {
        public int UserId { get; set; }
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }
        public UserType UserType { get; set; }
    }
}
