import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import toast from "react-hot-toast";

export const useFormSteps = create()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        isCartOpen: false,
        filters: [],
        total:0,
        setFilter: (payload) =>
          set((state) => ({ filters: [...state.filters, payload] })),
        product: null,
        isLoading: false,
        setIsCartOpen: (payload) => set((state) => ({ isCartOpen: payload })),
        loadProduct: (payload) => set((state) => ({ product: payload })),
        setLoading: (payload) => set((state) => ({ isLoading: payload })),
        addToCart: (payload) => {
          let isEXiting = get().cart.findIndex((c) => c.id === payload.id);
          console.log(isEXiting);
          if (isEXiting !== -1) {
            const updatedCart = [...get().cart];
            updatedCart[isEXiting].quentity += 1;
            set({ cart: updatedCart });
            toast.success("quentity update successfully");
          } else {
            set((state) => ({ cart: [...state.cart, payload] }));
            toast.success("added successfully");
          }
          set(() => ({ isCartOpen: true }));
          
        },
        updateCartQuentity: (type,id) => {
          let isEXiting = get().cart.findIndex((c) => c.id === id);
          console.log(isEXiting);
       
           if (type === "increment") {
             const updatedCart = [...get().cart];
            if (updatedCart[isEXiting].stock > updatedCart[isEXiting].quentity){
               updatedCart[isEXiting].quentity += 1;
            }
              set({ cart: updatedCart });
           } else {
             const updatedCart = [...get().cart];
            if( updatedCart[isEXiting].quentity > 1) {
               updatedCart[isEXiting].quentity -= 1;
            }
             set({ cart: updatedCart });
           }
         
        },
        deleteProduct:(id) =>{
                      let updatedCart = [...get().cart];
                      updatedCart = updatedCart.filter(upItem => upItem.id !== id);
                      console.log(updatedCart);
                      set({ cart: updatedCart });
            toast.success("item delete successfully");

        },
        totalAmount:()=>{
    const totalAmount = get().cart.reduce((acc, item) => {
      // Convert price from string to number
      const price = parseFloat(item.price);
      return acc + price * item.quentity;
    }, 0);
          set({ total: totalAmount });
        
        }
      }),
      {
        name: "products",
      }
    )
  )
);
