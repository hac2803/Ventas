using System;
using System.Collections.Generic;

namespace Ventas.Models
{
    public partial class VentaCabecera
    {
        public VentaCabecera()
        {
            VentaDetalle = new HashSet<VentaDetalle>();
        }

        public long Id { get; set; }
        public int IdCliente { get; set; }
        public DateTime Fecha { get; set; }
        public decimal? Total { get; set; }

        public virtual Cliente IdClienteNavigation { get; set; }
        public virtual ICollection<VentaDetalle> VentaDetalle { get; set; }
    }
}
