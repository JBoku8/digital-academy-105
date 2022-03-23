import { memo } from 'react';

const ProfileChildComponent = ({ params, onClick }) => {
  console.log('__CHILD_COMPONENT_RENDERING__', params.color);

  return (
    <h3
      style={{
        color: params.color,
      }}
    >
      Child Component
    </h3>
  );
};

export default memo(ProfileChildComponent);
/**
 * (prevProps, nextProps) => {
  return prevProps.params.color === nextProps.params.color;
}
 */
