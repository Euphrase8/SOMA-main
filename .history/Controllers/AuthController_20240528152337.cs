using Microsoft.AspNetCore.Mvc;

namespace SOMA.Controllers
{
    public class AuthController : Controller
    {
        // GET: AuthController
        public IActionResult Index()
    {
        return View();
    }

    }
}
