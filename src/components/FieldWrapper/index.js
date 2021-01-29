import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';

const FieldWrapper = ({
    name,
    errors,
    register,
    className,
    as: Component,
    defaultValue = '',
    ...rest
}) => {
    const error = useMemo(() => errors && errors[name], [errors, name]);

    return (
        <div>
            <Controller
                name={name}
                defaultValue={defaultValue}
                render={(props) => (
                    <Component
                        {...props}
                        {...rest}
                        ref={register}
                        error={error}
                        className={className}
                    />
                )}
            />
            {error && <div>{error.message}</div>}
        </div>
    );
};

export default FieldWrapper;
