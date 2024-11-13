import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from '@/components/features';

const meta = {
  title: 'Features/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    project: {
      id: 'test',
      title: 'Test Project',
      description: 'Test Description',
      image: '/placeholder.jpg',
      category: 'development',
      tags: ['React', 'TypeScript'],
      status: 'completed',
      date: '2024'
    }
  },
};
