import angular from 'angular';
import { NavModule } from './nav/nav.module';
import { FooterModule } from './footer/footer.module';

export const CommonModule = angular.module('commonModule', [NavModule, FooterModule])
  .name;