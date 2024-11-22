import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AppProvider, useAppContext } from '@/context/AppContext';
import { act } from 'react';
import Create from '@/components/Create/Create';

describe('Create Component', () => {
    const renderWithContext = () =>
        render(
            <AppProvider>
                <Create />
            </AppProvider>
        );

    it('should not render the Create modal if `showCreateModal` is false', () => {
        renderWithContext();

        // Modal should not exist in the DOM
        expect(screen.queryByText('Create Debate')).not.toBeInTheDocument();
    });

    it('should render the Create modal when `showCreateModal` is true', () => {
        const TestComponent = () => {
            const { setCreateModal } = useAppContext();
            return (
                <button onClick={setCreateModal} data-testid="open-modal">
                    Open Modal
                </button>
            );
        };

        render(
            <AppProvider>
                <Create />
                <TestComponent />
            </AppProvider>
        );

        // Open the modal
        fireEvent.click(screen.getByTestId('open-modal'));

        // Modal should now be visible
        expect(screen.getByText('Create Debate')).toBeInTheDocument();
    });

    it('should close the modal when the close button is clicked', () => {
        const TestComponent = () => {
            const { setCreateModal } = useAppContext();
            return (
                <button onClick={setCreateModal} data-testid="open-modal">
                    Open Modal
                </button>
            );
        };

        render(
            <AppProvider>
                <Create />
                <TestComponent />
            </AppProvider>
        );

        // Open the modal
        fireEvent.click(screen.getByTestId('open-modal'));

        // Verify modal is visible
        expect(screen.getByText('Create Debate')).toBeInTheDocument();

        // Close the modal
        const closeButton = screen.getByLabelText('Close modal');
        fireEvent.click(closeButton);

        // Modal should not be visible
        expect(screen.queryByText('Create Debate')).not.toBeInTheDocument();
    });

    it('should allow the user to type in the comment textarea', () => {
        const TestComponent = () => {
            const { setCreateModal } = useAppContext();
            return (
                <button onClick={setCreateModal} data-testid="open-modal">
                    Open Modal
                </button>
            );
        };

        render(
            <AppProvider>
                <Create />
                <TestComponent />
            </AppProvider>
        );

        // Open the modal
        fireEvent.click(screen.getByTestId('open-modal'));

        // Find the textarea and type
        const textarea = screen.getByPlaceholderText('Your comment');
        fireEvent.change(textarea, { target: { value: 'This is my comment.' } });

        // Verify the value
        expect(textarea.value).toBe('This is my comment.');
    });

    it('should render debate format options correctly', () => {
        const TestComponent = () => {
            const { setCreateModal } = useAppContext();
            return (
                <button onClick={setCreateModal} data-testid="open-modal">
                    Open Modal
                </button>
            );
        };

        render(
            <AppProvider>
                <Create />
                <TestComponent />
            </AppProvider>
        );

        // Open the modal
        fireEvent.click(screen.getByTestId('open-modal'));

        // Check debate format options
        expect(screen.getByText('Poll')).toBeInTheDocument();
        expect(screen.getByText('% Meter')).toBeInTheDocument();
        expect(screen.getByText('Yes or No')).toBeInTheDocument();
    });
});