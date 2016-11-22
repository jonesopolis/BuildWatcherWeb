using System;
using System.Threading.Tasks;
using BuildWatcher.Repository;
using Microsoft.AspNetCore.Mvc;

namespace BuildWatcher.Controllers
{
    public class HomeController : Controller
    {
        private readonly IBuildRepository _buildRepo;

        public HomeController(IBuildRepository buildRepo)
        {
            if (buildRepo == null)
            {
                throw new ArgumentNullException(nameof(buildRepo));
            }

            _buildRepo = buildRepo;
        }
        

        [HttpGet("")]
        public async Task<IActionResult> Index()
        {
            var result = await _buildRepo.GetSubscribedBuildsForUser(User.Identity.Name);
            if (result.IsSuccess)
            {
                return View(result.ResultObject);
            }

            return new StatusCodeResult(500);
        }

        [HttpPost("subscribe/{build}")]
        public async Task<IActionResult> SubscribeToBuild(string build)
        {

            return Ok();
        }
    }
}