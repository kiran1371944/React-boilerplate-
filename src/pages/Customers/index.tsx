import { Column } from '@/components/ui/layout/Layout';

export function CustomersPage() {
  return (
    <Column
      className="h-screen w-screen flex justify-between"
      style={{
        width: '100%',
        height: '90vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Customers
    </Column>
  );
}
