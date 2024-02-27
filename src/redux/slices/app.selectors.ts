import {RootState} from "@redux/configure-store.ts";


const selectIsLoading = (state: RootState) => state.app?.isLoading;


export { selectIsLoading }
