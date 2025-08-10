import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonWithIcon } from '../ButtonWithIcon';

it('ButtonWithIcon renders correctly', () => {
  const tree = renderer
    .create(
      <ButtonWithIcon
        width={60}
        height={40}
        icon={{ uri: 'https://dummyimage.com/40x40' }}
        onTap={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
