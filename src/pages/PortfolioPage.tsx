import { useSearchParams } from 'react-router-dom';
import { ProjectGrid } from '@/components/features/portfolio/ProjectGrid';
import { projects, featuredProjects, projectCategories } from '@/content';
import BasePage from './BasePage';

const FILTERS = [
  { id: 'featured', label: 'Featured Projects' },
  { id: 'all', label: 'All Projects' },
  ...projectCategories.map(({ id, label }) => ({ id, label }))
];

const filterProjects = (category: string) => {
  if (category === 'all') return projects;
  if (category === 'featured') return featuredProjects;
  return projects.filter(project => project.category === category);
};

const PortfolioPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /*
    The active filter lives in the URL (#/portfolio?category=id), not in
    component state. That is what lets "Back to Portfolio" and the browser's
    Back button return to the list the visitor was actually browsing, and
    makes a filtered view linkable. replace: true keeps filter clicks out of
    history, so Back leaves the page instead of replaying every filter tried.
  */
  const requested = searchParams.get('category');
  const active = FILTERS.find(filter => filter.id === requested) ?? FILTERS[0];
  const filteredProjects = filterProjects(active.id);

  const selectCategory = (id: string) =>
    setSearchParams({ category: id }, { replace: true });

  return (
    <BasePage
      seo={{
        title: "Portfolio",
        description: "Explore W. Jordan Charles's instructional design projects and learning solutions"
      }}
      title="Portfolio"
      subtitle="Evidence-based instructional design: ADDIE methodology, learning theory application, and measurable business outcomes"
      className="bg-background-light"
    >
      <div className="py-10 md:py-16">
        {/*
          Rendered inline rather than as a component declared inside this
          one. A nested component is a new type on every render, so React
          remounted every button on each click and keyboard focus dropped to
          <body>.
        */}
        <div
          role="group"
          aria-label="Filter projects"
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 md:mb-12"
        >
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={active.id === id}
              onClick={() => selectCategory(id)}
              className={`
                px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-medium transition-all
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2
                ${active.id === id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
              `}
            >
              {label}
            </button>
          ))}
        </div>

        <h2 className="sr-only">{active.label}</h2>
        <p role="status" className="sr-only">
          {`Showing ${filteredProjects.length} project${filteredProjects.length === 1 ? '' : 's'}`}
        </p>

        {/* showFilters=false: the filter row above is the only filter control. */}
        <ProjectGrid
          projects={filteredProjects}
          showFilters={false}
          className="mb-20"
        />
      </div>
    </BasePage>
  );
};

export default PortfolioPage;
