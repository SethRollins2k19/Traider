import React from 'react';


export abstract class AbstractPage extends React.Component<{}, any> {
    protected abstract customRender(): JSX.Element;

    render() {
        return (
            <div>
                {this.customRender()}
            </div>
        );
    }
}