SOURCES=requirements.md
OUTPUT=$(addprefix pdf/,$(SOURCES:.md=.pdf))
EXTENSIONS="yaml_metadata_block+header_attributes+multiline_tables+citations"

compile: clean $(OUTPUT)

clean:
	-rm -f pdf/*.pdf

pdf/%.pdf: %.md template/main.tex
	pandoc -f markdown_mmd+$(EXTENSIONS) --filter pandoc-citeproc --variable lang=finnish --variable documentclass=report --toc --template=template/main.tex -o $@ $<

all: $(FILES:.md=.pdf)

.PHONY: all
