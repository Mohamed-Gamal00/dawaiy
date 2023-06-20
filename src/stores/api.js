// import { createPinia } from 'pinia';
// import axios from 'axios';

// const pinia = createPinia();

// export const useStore = pinia.createStore({
//   state: () => ({
//     links: [],
//   }),
//   actions: {
//     async fetchLinks() {
//       try {
//         const response = await axios.get('https://qrtas.almona.host/api/link');
//         this.links = response.data.data;
//       } catch (error) {
//         console.error('Error fetching links:', error);
//       }
//     },
//   },
// });

// export default pinia;