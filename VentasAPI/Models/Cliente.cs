using System;
using System.Collections.Generic;

namespace Ventas.Models
{
    public partial class Cliente
    {
        public Cliente()
        {
            VentaCabecera = new HashSet<VentaCabecera>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; }

        public virtual ICollection<VentaCabecera> VentaCabecera { get; set; }
    }
}
