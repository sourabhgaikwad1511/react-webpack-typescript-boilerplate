import * as React from 'react'

interface IAppProps {
    name: string;
}

export class App extends React.Component<IAppProps,any> {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        )
    }
}
 
export default App;
