import { ApiService } from "./userApiService"
import { MockService } from "./userMockService"

// const useMock = false
const useMock = true

export const ApiFactory = useMock ? MockService : ApiService