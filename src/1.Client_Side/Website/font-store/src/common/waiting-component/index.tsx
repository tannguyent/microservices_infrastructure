import * as React from 'react';

import Loader from '../loader'

export const WaitingComponent = (
    Component: (React.LazyExoticComponent<any>)
) => {
    return class HOC extends React.Component<any> {
        render(): JSX.Element {
            return (
                <React.Suspense fallback={<Loader />}>
                    <Component />
                </React.Suspense>
            );
        }
    };
};