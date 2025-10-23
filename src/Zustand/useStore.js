import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import {
  getProductos,
  getProductosPorCategoria,
  getCategorias,
  getSubcategorias,
} from '../services/supabaseService'

const useStore = create(
  devtools((set) => ({
    Menu: false,
    menuCarrito: false,

    // Contenidos
    Productos: [],
    Carrito: [],
    ContenidoCategoria: [],
    ContenidoSubcategoria: [],

    // Categorias y subcategorias
    Categoria: '',
    SubCategoria: '',

    // Filtro
    EstadoFiltro: false,

    // menu
    botonMenu: () => set((state) => ({ Menu: !state.Menu })),
    openMenu: () => set({ Menu: true }),
    closeMenu: () => set({ Menu: false }),

    //Apertura/cierre carrito
    menuCart: () => set((state) => ({ menuCarrito: !state.menuCarrito })),
    OpenMenuCart: () => set({ menuCarrito: true }),
    ClosemenuCarrito: () => set({ menuCarrito: false }),

    // Productos
    fetchProductos: async () => {
      const data = await getProductos() //llama supaService que llama y lo ingresa al estado
      set({ Productos: data })
    },
    setProductos: (productos) => set({ Productos: productos }),

    // Categorias y subcategorias

    setFiltro: async (Categoria, SubCategoria) => {
      set({ Categoria, SubCategoria })
      const data = await getProductosPorCategoria(Categoria, SubCategoria)
      console.log(data)
      set({ Productos: data })
    },

    fetchCategoria: async () => {
      const data = await getCategorias()
      console.log(data)
      set({ ContenidoCategoria: data })
    },

    fetchSubCategoria: async () => {
      const data = await getSubcategorias()
      set({ ContenidoSubcategoria: data })
    },
    //  Filtros

    MenuFiltro: () => set((state) => ({ EstadoFiltro: !state.EstadoFiltro })),
    openFiltro: () => set({ EstadoFiltro: true }),
    closeFiltro: () => set({ EstadoFiltro: false }),
  }))
)
export default useStore
