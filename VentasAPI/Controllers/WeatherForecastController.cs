using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Ventas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            //var rng = new Random();
            //return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            //{
            //    //Date = DateTime.Now.AddDays(index),
            //    //TemperatureC = rng.Next(-20, 55),
            //    //Summary = Summaries[rng.Next(Summaries.Length)]
            //})
            //.ToArray();

            //Esta función devuelve un Enumerable (lista) de objetos
            List<WeatherForecast> lst = new List<WeatherForecast>();
            lst.Add(new WeatherForecast() { Id = 1, Nombre = "Juan" });
            lst.Add(new WeatherForecast() { Id = 2, Nombre = "Pedro" });
            return lst;
        }
    }
}
