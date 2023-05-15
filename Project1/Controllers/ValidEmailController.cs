using Microsoft.AspNetCore.Mvc;

namespace Project1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ValidEmailController : ControllerBase
    {
        private readonly ILogger<ValidEmailController> _logger;

        public ValidEmailController(ILogger<ValidEmailController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ValidEmail validemail(string email)
        {
            return new ValidEmail
            {
                Date = DateTime.Now,
                Email = email
            };
        }

    }
}