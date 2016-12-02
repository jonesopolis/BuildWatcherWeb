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
            return View();
        }
    }
}