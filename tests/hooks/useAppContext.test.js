import { renderHook, act } from '@testing-library/react-hooks';
import { AppProvider, useAppContext } from '@/context/AppContext';

describe('useAppContext', () => {
    it('should provide default context values', () => {
        const { result } = renderHook(() => useAppContext(), { wrapper: AppProvider });

        expect(result.current.showCreateModal).toBe(false);
        expect(typeof result.current.setCreateModal).toBe('function');
    });

    it('should toggle `showCreateModal` when `setCreateModal` is called', () => {
        const { result } = renderHook(() => useAppContext(), { wrapper: AppProvider });

        // Initial value
        expect(result.current.showCreateModal).toBe(false);

        // Toggle on
        act(() => {
            result.current.setCreateModal();
        });
        expect(result.current.showCreateModal).toBe(true);

        // Toggle off
        act(() => {
            result.current.setCreateModal();
        });
        expect(result.current.showCreateModal).toBe(false);
    });
});