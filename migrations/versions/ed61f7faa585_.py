"""empty message

Revision ID: ed61f7faa585
Revises: bc00ce352890
Create Date: 2023-03-23 22:50:50.837411

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ed61f7faa585'
down_revision = 'bc00ce352890'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('master', schema=None) as batch_op:
        batch_op.add_column(sa.Column('alias', sa.String(length=20), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('master', schema=None) as batch_op:
        batch_op.drop_column('alias')

    # ### end Alembic commands ###
