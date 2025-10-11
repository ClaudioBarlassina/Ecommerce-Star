import { supabase } from '../lib/supabaseClient'

// Obtener todos los productos
export async function getProductos() {
  const { data, error } = await supabase
    .from('productos')
    .select(` id,
      nombre,
      descripcion,
      precio,
      activo,
      categorias ( id, nombre ),
      subcategorias ( id, nombre ),
      imagenes_productos ( url )

     
    `)
    

  if (error) {
    console.error('Error al traer productos:', error)
    return []
  }

  return data
}

// Ejemplo: obtener productos por categoría
export async function getProductosPorCategoria(categoria_id) {
  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .eq('categoria_id', categoria_id)

  if (error) {
    console.error('Error al filtrar productos:', error)
    return []
  }

  return data
}
