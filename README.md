# Places Tracing Guide

Currently in development.

### To-do:

#### Primary:

- Content updates/additions based on changes to data schema
  - [ ] Rename/add new presets
  - [ ] Reword road language to be more park-specific (use of the word "highway", "Primary Road" as relative to park context, etc)
  - [ ] Reorganize trails + add "Ferry Route"
- Redo gifs to conform to changes to Editor interface/preset names:
  - [ ] Litter Receptacle
  - [ ] Potable Water
- [ ] Highlight `NPS Unit Code` being lowercase only
- [ ] Highlight `nps:` tags (coming in from GIS seeds)
- [ ] Note using POIs for wayfinding/routing (so do not add a point to a restricted parking lot, building, etc)
- [ ] Note adding `{"access":"no"}` for restricted features
- [X] Remove links to OSM wikis
- [X] Remove underlying tags tabs (to be included in Technical User Documentation)
- [X] Change optional field presentation from tag to title as displayed in editor
- [ ] Ensure proper optional fields per preset, and in correct order as displayed in Editor
- [ ] Fix anchors (add a hidden anchor before the header anchor and give it a negative top value to make up for the height of the navbar)

#### Secondary:

- [ ] Implement service-wide individual `.json` files
- [ ] Fix [navbar button bug](https://github.com/nationalparkservice/places-tracing-guide/issues/13)
