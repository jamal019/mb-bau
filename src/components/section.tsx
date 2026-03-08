import { ReactNode } from 'react';
import { Container } from '@/components/container';

type SectionProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, description, children, className = '' }: SectionProps) {
  return (
    <section className={`py-14 sm:py-18 ${className}`.trim()}>
      <Container>
        {title ? (
          <div className="mb-8 max-w-reading">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
            {description ? <p className="mt-4 text-lg text-slate-600">{description}</p> : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
