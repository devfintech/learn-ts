import { Component, ComponentClass, ComponentType } from "react"

interface State {
  hasError: boolean
}
const withErrorBoundary = <T extends Record<string, never>>(
  WrappedComponent: ComponentType<T>,
): ComponentClass<T, State> =>
  class ErrorBoundary extends Component<T, State> {
    constructor(props: T) {
      super(props)
      this.state = { hasError: false }
    }
    static getDerivedStateFromError(error: Error) {
      console.error(error)
      return { hasError: true }
    }
    render() {
      if (this.state.hasError) {
        return <>Something went wrong</>
      }
      return <WrappedComponent {...this.props} />
    }
  }
export default withErrorBoundary
