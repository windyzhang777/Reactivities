using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [ApiController]
    // [Route("[controller]")]
    [Route("api/[controller]")] // api/xxx
    public class BaseApiController : ControllerBase
    {

    }
}