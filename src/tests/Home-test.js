//TEST Attempted from the react/jest testing library website, NOT CURRENTLY WORKING.

/*

import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Home from '../components/Home';
import '@testing-library/jest-dom/extend-expect';

describe('Input value', () => {
    it('updates value on change', () => {
        const setSearch = jest.fn((value) => {})

        const { queryByPlaceholderText } = render(<Home setSearch={setSearch}/>)

        const searchInput = queryByPlaceholderText('{subreddit}')

        fireEvent.change(searchInput, {target: { value: 'test' } })

        expect(searchInput.value).toBe({subreddit}) //OR
        expect(setSearch).toHaveBeenCalledWith({subreddit})
    })
})

*/