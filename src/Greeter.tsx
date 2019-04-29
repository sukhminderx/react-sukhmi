import * as React from 'react';
interface p {
    name: string;
}
export const Greeter: React.SFC<p> = (pr: p) => (<div>Hello ${pr.name}</div>);