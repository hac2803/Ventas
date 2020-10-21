using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Ventas.Models;
using Ventas.Models.Request;
using Ventas.Models.Response;

namespace Ventas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            Respuesta oRespuesta = new Respuesta();

            try
            {
                using (VentasContext db = new VentasContext())
                {
                    var lst = db.Cliente.ToList();
                    oRespuesta.Exito = 1;
                    oRespuesta.Data = lst;
                }
            }
            catch (Exception ex)
            {
                oRespuesta.Exito = 0;
                oRespuesta.Mensaje = ex.Message;
            }
            return Ok(oRespuesta);
        }

        [HttpPost]
        public IActionResult Add(ClienteRequest oRequest)
        {
            Respuesta oRespuesta = new Respuesta();

            try
            {
                using (VentasContext db = new VentasContext())
                {
                    Cliente oCliente = new Cliente();
                    oCliente.Nombre = oRequest.Nombre;
                    db.Cliente.Add(oCliente);
                    db.SaveChanges();

                    oRespuesta.Exito = 1;
                    oRespuesta.Data = oCliente;
                }
            }
            catch (Exception ex)
            {
                oRespuesta.Exito = 0;
                oRespuesta.Mensaje = ex.Message;
            }
            return Ok(oRespuesta);
        }

        [HttpPut]
        public IActionResult Update(ClienteRequest oRequest)
        {
            Respuesta oRespuesta = new Respuesta();

            try
            {
                using (VentasContext db = new VentasContext())
                {
                    Cliente oCliente = db.Cliente.Find (oRequest.Id);
                    oCliente.Nombre = oRequest.Nombre;
                    //db.Entry(oCliente).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    db.Update(oCliente);
                    db.SaveChanges();

                    oRespuesta.Exito = 1;
                    oRespuesta.Data = oCliente;
                }
            }
            catch (Exception ex)
            {
                oRespuesta.Exito = 0;
                oRespuesta.Mensaje = ex.Message;
            }
            return Ok(oRespuesta);

        }

        //[HttpDelete ("{Id}")] // Para pasar Id por la URL
        [HttpDelete]
        public IActionResult Delete(ClienteRequest oRequest)
        {
            Respuesta oRespuesta = new Respuesta();

            try
            {
                using (VentasContext db = new VentasContext())
                {
                    Cliente oCliente = db.Cliente.Find(oRequest.Id);
                    //oCliente.Nombre = oRequest.Nombre;
                    db.Remove(oCliente);
                    db.SaveChanges();

                    oRespuesta.Exito = 1;
                    oRespuesta.Data = oCliente;
                }
            }
            catch (Exception ex)
            {
                oRespuesta.Exito = 0;
                oRespuesta.Mensaje = ex.Message;
            }
            return Ok(oRespuesta);

        }



    }
}
