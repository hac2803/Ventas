using System;
using System.Collections.Generic;

namespace Ventas.Models
{
    public partial class VentaDetalle
    {
        public long Id { get; set; }
        public long IdVenta { get; set; }
        public int Cantidad { get; set; }
        public decimal Precio { get; set; }
        public decimal Importe { get; set; }
        public int IdProducto { get; set; }

        public virtual Producto IdProductoNavigation { get; set; }
        public virtual VentaCabecera IdVentaNavigation { get; set; }
    }
}
