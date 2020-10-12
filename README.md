# Ventas
API Rest, Entity Framework (backend) + React, Context, PrimeReact (frontend)



1) Para instalar Entity Framework

Desde Solution Explorer: Dependencies, botón derecho, "Manage Nuget Packages"
Buscar e instalar Microsoft.EntityFrameworkCore.SQLServer y Microsoft.EntityFrameworkCore.Tools

Crear Models
Desde la consola de Nuget (Tools / Nuget Package Manager / Package Manager Console)

Scaffold-DBContext "Server=WLEARBUE1-00182\SQLEXPRESS;Database=Ventas;Trusted_Connection=True"  Microsoft.EntityFrameworkCore.SQLServer -OutputDir Models
o
Scaffold-DBContext "Server=WLEARBUE1-00182\SQLEXPRESS;Database=Ventas;User=sa;Password=123456"  Microsoft.EntityFrameworkCore.SQLServer -OutputDir Models


