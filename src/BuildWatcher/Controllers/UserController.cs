using Microsoft.AspNetCore.Mvc;

namespace BuildWatcher.Controllers
{
    [Route("api/user")]
    public class UserController : Controller
    {
        [HttpGet("")]
        public IActionResult GetUsername()
        {
            return Ok(User.Identity.Name);
        }
    }
}