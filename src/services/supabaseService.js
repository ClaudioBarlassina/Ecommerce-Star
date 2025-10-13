import { data } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

// Obtener todos los productos
export async function getProductos() {
  const { data, error } = await supabase.from('productos').select(`id,
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

export async function getProductosPorCategoria(Categoria, SubCategoria) {
  // 1️⃣ Obtener ID de la categoría
  console.log(Categoria, SubCategoria)
  const { data: categoria, error: errorCategoria } = await supabase
    .from('categorias')
    .select('id')
    .eq('nombre', Categoria)
    .maybeSingle();
  console.log(categoria)
  if (errorCategoria || !categoria) {
    console.error('Error al obtener categoría:', errorCategoria);
    return [];
  }

  // 2️⃣ Obtener ID de la subcategoría
  const { data: subcategoria, error: errorSubcategoria } = await supabase
    .from('subcategorias')
    .select('id')
    .eq('nombre', SubCategoria)
    .maybeSingle();
console.log()
  if (errorSubcategoria || !subcategoria) {
    console.error('Error al obtener subcategoría:', errorSubcategoria);
    return [];
  }

  // 3️⃣ Verificar si esa combinación existe en la tabla intermedia
  const { data: relacion, error: errorRelacion } = await supabase
    .from('categorias_subcategorias')
    .select('id')
    .eq('categoria_id', categoria.id)
    .eq('subcategoria_id', subcategoria.id)
    .maybeSingle();

  if (errorRelacion || !relacion) {
    console.warn(`No existe relación entre ${Categoria} y ${SubCategoria}`);
    return [];
  }

  // 4️⃣ Obtener productos que pertenecen a esa categoría y subcategoría
  const { data: productos, error: errorProductos } = await supabase
    .from('productos')
    .select(`
      id,
      nombre,
      descripcion,
      precio,
      imagenes_productos (url)
    `)
    .eq('categoria_id', categoria.id)
    .eq('subcategoria_id', subcategoria.id);

  if (errorProductos) {
    console.error('Error al obtener productos:', errorProductos);
    return [];
  }

  return productos;
}