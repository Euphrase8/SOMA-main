using Microsoft.AspNetCore.Mvc;

namespace SOMA.Controllers
{
    public class AuthController : Controller
    {
        // GET: AuthController
        public ActionResult Login()
        {
            return View();
        }

    }
}
