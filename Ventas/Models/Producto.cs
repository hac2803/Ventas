using System;
using System.Collections.Generic;

namespace Ventas.Models
{
    public partial class Producto
    {
        public Producto()
        {
            VentaDetalle = new HashSet<VentaDetalle>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; }
        public decimal Precio { get; set; }
        public decimal Costo { get; set; }

        public virtual ICollection<VentaDetalle> VentaDetalle { get; set; }
    }
}
