import React, { Fragment } from 'react';

const CardWrapper = ({
  children,
  escolha,
  name,
  errors,
  className,
  register,
  as: Component,
  defaultValue = '',
  ...rest
}) => {
  // const error = useMemo(() => errors && errors[name], [errors, name]);

  return (
    <div>
      <Fragment
        key={escolha}
        children={children}
        render={(props) => (
          <Component
            {...props}
            {...rest}
            ref={register}
            className={className}
            defaultValue={defaultValue}
            name={name}
          />
        )}
      />
      {/* {error && <div>{error.message}</div>} */}
    </div>
  );
};

export default CardWrapper;
