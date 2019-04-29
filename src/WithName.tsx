import * as React from 'react';

interface pr {
    name: string;
}

export class WithName extends React.Component<pr, {}> {
    render () {
        return <div>
            {this.props.name}
        </div>
    }
}